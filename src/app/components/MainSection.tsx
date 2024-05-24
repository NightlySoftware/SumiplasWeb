interface MainSectionProps {
  title: string;
  description: string;
  oneliner: string;
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ title, description, oneliner, children }) => {
  return (
    <div className="flex flex-col w-full bg-spwhite rounded-t-2xl g:rounded-t-[32px] xl:rounded-t-[80px] p-5 m:p-10 g:p-16 pb-20 gap-16 z-[2]">
      <div className="flex flex-col max-w-[600px] lg:max-w-[60%] self-center text-spblack text-center text-pretty gap-4">
        <p className="text-3xl font-medium py-8">{title}</p>
        <p className="leading-5">
          {description}
          <br /> <br />
          {oneliner}
        </p>
      </div>
      {children}
    </div>
  );
};

export default MainSection;
