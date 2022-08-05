import styles from './AuthForm.css';
import { Link } from 'react-router-dom';
import Section from '../Body/Basic/Section/Section.jsx';
import Button from '../Body/Basic/Button/Button.jsx';
import { useForm } from '../../State/Hooks/formData.js';
import { InputControl } from '../Body/Form/FormControls/FormControls';

export default function AuthForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, handleChange] = useForm({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.email, credentials.password);
    };

    return (
        <Section className={styles.AuthForm} header={header}>
            <form onSubmit={handleSubmit}>
                <InputControl
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <InputControl
                    label="Password"
                    name="password"
                    type="password"
                    required
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />

                <Button text={button} marginTop={'20px'}/>

                <Link to={link}>{prompt}</Link>
            </form>
        </Section>
    );
}
