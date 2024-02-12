import Image from "next/image";
import { LoginAuth } from "@/app/api/route";

const LoginPage = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="/logonew.png" alt="logo cms" width={200} height={200} />
        </div>
        <div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
