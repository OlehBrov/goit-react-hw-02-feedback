import { FeedbackButtons } from './feedbackControls/buttons/buttons';
import { FeedbackControls } from './feedbackControls/feedbackControls';
import { Container } from './container/container.styled';

export const App = () => {
  return (
    <Container>
      <FeedbackControls />
    </Container>
  );
};
