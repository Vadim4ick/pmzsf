import Image from "next/image";

const Avatar = () => {
  return (
    <button className="cursor-pointer">
      <Image
        className="rounded-full"
        width={32}
        height={32}
        src="/img/noavatar.png"
        alt="avatar"
      />
    </button>
  );
};

export { Avatar };
