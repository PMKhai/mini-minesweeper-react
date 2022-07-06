import { ReactElement } from 'react';
interface TitleProps {
  title: string;
}
const Title = (props: TitleProps): ReactElement => <h1>{props.title}</h1>;

export default Title;
