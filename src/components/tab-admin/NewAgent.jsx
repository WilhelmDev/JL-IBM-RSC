"use client"
import ProfileForm from "./new-agent/ProfileForm";
import SocialMediaForm from "./new-agent/SocialMediaForm";
import ChangePasswordForm from "./new-agent/ChangePasswordForm";
import { getMe } from "@/core/infrastructure/services/tab-agent.service";
import { useEffect, useState } from "react"

const NewAgent = () => {
  const [agent, setAgent] = useState({});

  useEffect(() => {
    const fetchAgent = async () => {
      const agent = await getMe();
      setAgent(agent);
    };
    fetchAgent();
  }, []);

  if (!Object.keys(agent).length) return null;

  return (
    <div id="new-agent">
      <header className="container p-0">
        <h2>Perfil de Agente</h2>
        <p>Estás editando la información de tu perfil</p>
      </header>
      <ProfileForm agent={agent} />
      <SocialMediaForm />
      <ChangePasswordForm />
    </div>
  );
};

export default NewAgent;
