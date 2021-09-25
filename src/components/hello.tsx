interface HelloProps {
  msg: string;
}

export default function Hello(props: HelloProps) {
  return <div>{props.msg}</div>;
}
