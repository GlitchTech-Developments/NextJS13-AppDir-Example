import LoadingPage from "~/components/LoadingPage";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex w-full h-full inset-0 fixed overflow-hidden bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-white">
      <LoadingPage />
    </div>
  );
};
export default Loading;
