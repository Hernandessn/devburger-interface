import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from "./styles";

import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";

export function Login() {
	const schema = yup
		.object({
			email: yup
			.string()
			.email('Digite um e-mail válido')
			.required('O e-mail é obrigatório'),
			password: yup
			.string()
			.min(6, 'A senha deve ter pelo menos 6 caracteres')
			.required('Digite uma senha'),
		})
		.required();
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
	const response =  await toast.promise(
		api.post('/session', {
			email: data.email,
			password: data.password,
		}),
		{
			pending: 'Verificando os Dados',
			success: 'Seja Bem-vindo(a) 👌',
			error: 'Email ou Senha Incorretos 🤯',
		}
	);
	
			
		console.log(response);
		
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja bem vindo ao <span>Dev Burger!</span>
					<br />
					Acesse com seu <span>Login e senha.</span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Email</label>
						<input type="email" {...register("email")} />
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Senha</label>
						<input type="password" {...register("password")} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<p>
					Não possui conta?
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Clique aqui.</a>
				</p>
			</RightContainer>
		</Container>
	);
}
