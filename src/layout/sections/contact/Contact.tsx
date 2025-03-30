import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Button } from '../../../components/button/Button';

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={'name'} />
        <Field placeholder={'subject'} />
        <Field placeholder={'message'} as={'textarea'} />
        <Button type={'submit'}>Send Message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  height: 50vh;
  background-color: #fffae1;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input``;
