import Image from "next/image";

const name = "naobe";

const Header = () => {
  return (
    <header className="flex items-center p-4 gap-4">
      <Image src="/icon.jpg" alt="logo" width={100} height={100} />
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
