import { Logo } from "@/shared/ui";

export const Header = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[1120px] h-[104px] border border-gray">
        <Logo />
      </div>
    </div>
  );
};
