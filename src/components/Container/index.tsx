interface IContainerProps {
  children: React.ReactNode
}

const Container = ({children}: IContainerProps) => {
  return <div className="max-w-screen-xl px-5 mx-auto">{children}</div>;
};

export default Container;