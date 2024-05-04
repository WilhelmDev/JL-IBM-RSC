"use client"
import ProfileForm from "./new-agent/ProfileForm";
import SocialMediaForm from "./new-agent/SocialMediaForm";
import ChangePasswordForm from "./new-agent/ChangePasswordForm";
import { getMe, getSocialMedia } from "@/core/infrastructure/services/tab-agent.service";
import { useEffect, useState } from "react"

const NewAgent = () => {
  const [agent, setAgent] = useState({});
  const [socialMedia, setSocialMedia] = useState({});

  useEffect(() => {
    const fetchAgentData = async () => {
      const agent = await getMe();
      setAgent(agent);
      const socialMedia = await getSocialMedia(agent.id)
      setSocialMedia(socialMedia);
    };
    fetchAgentData();
  }, []);

  if (!(Object.keys(agent).length && Object.keys(socialMedia).length)) 
  return <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  return (
    <div id="new-agent">
      <header className="container p-0">
        <h2>Perfil de Agente</h2>
        <p>Estás editando la información de tu perfil</p>
      </header>
      <ProfileForm agent={agent} setAgent={setAgent} />
      <SocialMediaForm agentId={agent.id} socialMedia={socialMedia} setSocialMedia={setSocialMedia} />
      <ChangePasswordForm agentId={agent.id} />
    </div>
  );
};

export default NewAgent;
