import dynamic from "next/dynamic";
const NewAgent = dynamic(() => import("@/components/tab-admin/NewAgent"), {
  ssr: false,
});

function ProfilePage() {
  return (
    <div id="tab-admin">
      <div id="content">
        <NewAgent />
      </div>
    </div>
  );
}

export default ProfilePage;
