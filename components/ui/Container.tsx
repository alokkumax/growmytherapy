type Props = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Container({ children, className = "" }: Props) {
    return (
      <div className={`w-full px-6 md:px-10 lg:px-18 ${className}`}>
        {children}
      </div>
    );
  }
  