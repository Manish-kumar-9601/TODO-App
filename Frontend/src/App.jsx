import { Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/todoPage.tsx';
import { SignUp } from './pages/signUpForm.tsx';
import { AuthOption } from './components/authOption.tsx';
import { AuthContextProvider } from './context/authContext.tsx';

export function App ()
{
    let auth="LOGI" 
    return (
 
        <>
<nav>
    <button className='flex absolute right-2'>
        {auth}
    </button>
</nav>
{
    (auth!=="LOGIN")?<AuthOption/>: <TodoPage />
}
{/* <TodoPage /> */}
        </>
    );
}

