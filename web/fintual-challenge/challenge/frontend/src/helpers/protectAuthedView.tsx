import type { AxiosResponse } from "axios";
import axiosInstance from "./axiosHelper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface ProtectAuthedViewProps {
  children: React.ReactNode;
}

interface IsAuthedProps {
  authenticated: boolean;
}

const ProtectAuthedView: React.FC<ProtectAuthedViewProps> = ({
  children,
}) => {
  const [authed, setAuthed] = useState<boolean | undefined>();
  const router = useRouter();

  useEffect(() => {
    async function checkAuthed() {
      try {
        const response: AxiosResponse<IsAuthedProps> = await axiosInstance.get(
          '/user/is_authed/'
        );

        setAuthed(response.data.authenticated);

        if (response.status !== 200 || !response.data.authenticated) {
          throw new Error('Authentication failed');
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        void router.push("/");
      }
    }

    void checkAuthed();
  }, [router]);

  if (authed === undefined) {
    return <p>Cargando...</p>;
  }

  return authed ? <>{children}</> : null;
};

export default ProtectAuthedView;
