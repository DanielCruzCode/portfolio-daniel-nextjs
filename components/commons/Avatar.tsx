import Image from "next/image";

export const Avatar = () => {
  return (
    <>
      <Image
        className="avatar-img"
        src="/assets/imgs/avatar.jpg"
        alt="Daniel Cruz photo"
        width={174}
        height={174}
      />
      <style jsx>{`
        :global(.avatar-img) {
          border-radius: 50%;
          overflow: hidden;
          width: 174px;
          height: 174px;
        }
      `}</style>
    </>
  );
};
