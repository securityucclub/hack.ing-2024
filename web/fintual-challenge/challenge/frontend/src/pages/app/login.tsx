import { type AxiosResponse } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type FormEvent } from "react";
import { FintualBtn } from "~/components/FintualBtn";
import { FintualLogoWithText } from "~/components/FintualLogos";
import { useAuth } from "~/helpers/authContext";
import axiosInstance from "~/helpers/axiosHelper";

interface ApiResponse {
  success: boolean;
  tokens: {
    access: string;
    refresh: string;
  };
}

function FintualInput(props: React.ComponentProps<"input">) {
  return (
    <input
      className="color-[#282828] mb-4 flex w-full rounded-[12px] border border-solid border-[#e1e1e1] p-4 text-[14px]"
      {...props}
    />
  );
}

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const sendCreateAccountRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("running");

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response: AxiosResponse<ApiResponse> = await axiosInstance.post(
        `/login/`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      if (response.data.tokens.access && response.data.tokens.refresh) {
        login(response.data.tokens.access, response.data.tokens.refresh);
      }

      setEmail("");
      setPassword("");
      setError(null);

      void router.push("/app/goals/");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-[100svh] w-full items-center justify-center">
      <div className="w-full max-w-[550px] rounded-xl border border-[#e1e1e1] px-[60px] py-[50px] text-center">
        <div className="mb-6 flex justify-center">
          <FintualLogoWithText className="h-6" />
        </div>
        <h1 className="mb-6 text-[25px]">Hola de nuevo 👋</h1>
        <form onSubmit={sendCreateAccountRequest}>
          <FintualInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FintualInput
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={
              "flex h-[44px] w-full flex-row items-center justify-center  gap-4 rounded-[32px] border border-solid border-transparent bg-[#005ad6] px-[52px] py-7 text-sm text-white"
            }
          >
            Entrar
          </button>
        </form>
        {error && <div className="text-red-500">{error}</div>}
        <div className="mt-8">
          <Link href="/" className="mb-3 block text-[#005ad6]">
            Recuperar contraseña
          </Link>
          <Link href="/" className="mb-3 block text-[#005ad6]">
            ¿No tienes cuenta?
          </Link>
        </div>
      </div>
    </div>
  );
}
