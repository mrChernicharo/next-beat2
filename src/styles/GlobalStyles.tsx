import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body{
	background: #32333c;
	color: #fff;
	font-family: 'Montserrat', sans-serif;
	
}

span{
	display:block;
	margin-bottom: 10px;
	border: none;
	border-right: 1px solid #fff;
	border-bottom: 1px solid #fff;
	}
`;
