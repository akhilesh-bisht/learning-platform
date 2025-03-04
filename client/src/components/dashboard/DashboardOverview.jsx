import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProgress,
  fetchRecommendedLessons,
} from "../../redux/actions/progressActions";
import { useAuth } from "../../contexts/AuthContext";
import ProgressChart from "../progress/ProgressChart";
import SubjectCard from "../common/SubjectCard";
import RecommendedLessons from "./RecommendedLessons";
import AchievementBadges from "../progress/AchievementBadges";
import LearningStreak from "../progress/LearningStreak";
import LoadingSpinner from "../common/LoadingSpinner";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const { userProfile } = useAuth();
  const { progress, recommendations, loading } = useSelector(
    (state) => state.progress
  );

  useEffect(() => {
    if (userProfile?._id) {
      dispatch(fetchUserProgress(userProfile._id));
      dispatch(fetchRecommendedLessons(userProfile._id));
    }
  }, [dispatch, userProfile]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Welcome back, {userProfile?.username}!
          </h2>
          <LearningStreak streak={progress?.streak || 0} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <ProgressChart progressData={progress} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Your Achievements
          </h2>
          <AchievementBadges badges={progress?.badgesEarned || []} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Continue Learning
        </h2>
        <RecommendedLessons recommendations={recommendations} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Explore Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userProfile?.grade && (
            <>
              <SubjectCard
                subject={{
                  name: "Math",
                  gradeLevel: userProfile.grade,
                  icon: "🔢",
                }}
                progress={progress?.mathProgress || 0}
              />
              <SubjectCard
                subject={{
                  name: "English",
                  gradeLevel: userProfile.grade,
                  icon: "📚",
                }}
                progress={progress?.englishProgress || 0}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
