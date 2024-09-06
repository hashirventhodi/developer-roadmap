import { getPercentage } from '../../helper/number';
import { getUser } from '../../lib/jwt';
import type { UserProgress } from '../TeamProgress/TeamProgressPage';
import { DashboardProgressCard } from './DashboardProgressCard';

type ListDashboardProgressProps = {
  progresses: UserProgress[];
  isLoading?: boolean;
  isCustomResources?: boolean;
};

export function ListDashboardProgress(props: ListDashboardProgressProps) {
  const { progresses, isLoading = false } = props;

  if (!isLoading && progresses.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className="mb-3 mt-8 text-xs uppercase text-gray-400">
        Progress and Bookmarks
      </h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <DashboardProgressCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {progresses.map((progress) => (
              <DashboardProgressCard
                key={progress.resourceId}
                progress={progress}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

type DashboardProgressCardSkeletonProps = {};

export function DashboardProgressCardSkeleton(
  props: DashboardProgressCardSkeletonProps,
) {
  return (
    <div className="h-[106px] w-full animate-pulse rounded-md bg-gray-200" />
  );
}
