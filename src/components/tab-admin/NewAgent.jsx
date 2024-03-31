import ProfileForm from "./new-agent/ProfileForm";
import SocialMediaForm from "./new-agent/SocialMediaForm";
import ChangePasswordForm from "./new-agent/ChangePasswordForm";

const NewAgent = () => {
  return (
    <div id="new-agent">
      <header className="container p-0">
        <h2>Perfil de Agente</h2>
        <p>Estás editando la información de tu perfil</p>
      </header>
      <ProfileForm />
      <SocialMediaForm />
      <ChangePasswordForm />
    </div>
  );
};

export default NewAgent;
