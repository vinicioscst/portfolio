interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return <div className="max-w-screen-lg px-5 mx-auto">{children}</div>
}

export default Container
