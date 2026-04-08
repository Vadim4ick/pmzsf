const GradientShadow = ({
  background = "linear-gradient(to top, #030816 0%, rgba(3,8,22,0) 51%)",
}: {
  background?: string;
}) => {
  {
    /* Тёмный оверлей — базовый слой */
  }
  {
    /* <div className="absolute inset-0 rounded-[12px] bg-[#030816]/30" /> */
  }
  return (
    <div
      className="absolute inset-0"
      style={{
        background,
      }}
    />
  );
};

export { GradientShadow };
