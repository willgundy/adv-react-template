import Button from '../Basic/Button/Button';
import Section from '../Basic/Section/Section';
import { CheckboxControl, 
  InputControl, 
  SelectControl, 
  TextAreaControl } 
  from './FormControls/FormControls.jsx';

export default function Form() {
  return (
    <Section header="Sign Up" 
      subText="Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing."
      width={'50vw'}>
      <form>
        <InputControl
          label="email"
          name="email"
          placeholder="enter your email"
          type="email"
          required
        />

        <InputControl
          label="password"
          name="password"
          placeholder="choose a password"
          type="password"
          required
        />

        <SelectControl label="type">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <TextAreaControl label="bio" placeholder="tell us about yourself" />

        <Button text="Submit" />
      </form>
    </Section>
  );
}
