import styled from 'styled-components';
import Header from './components/Header';

// import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
    // Your style here
`;

export function App() {
    return (
        <StyledApp>
            <Header></Header>
            <h1>Hidayt</h1>
            <h2>Welcome nx!!</h2>
        </StyledApp>
    );
}

export default App;
