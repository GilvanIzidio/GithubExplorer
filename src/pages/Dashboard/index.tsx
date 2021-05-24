import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import gitexplorer from '../../assets/gitexplorer.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={gitexplorer} alt="GithubExplorer" />
            <Title>Explore respositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="Teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/62617637?v=4"
                        alt="imageProfile"
                    />
                    <div>
                        <strong>PlantManager</strong>
                        <p>repo referente nlw 5</p>
                    </div>
                    <FiChevronsRight size={20} />
                </a>

                <a href="Teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/62617637?v=4"
                        alt="imageProfile"
                    />
                    <div>
                        <strong>PlantManager</strong>
                        <p>repo referente nlw 5</p>
                    </div>
                    <FiChevronsRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
