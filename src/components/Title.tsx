interface Props {
  content: string;
}

const Title = ({ content }: Props) => {
  return <h1>{content}</h1>;
};
export default Title;
