import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: 480px;
  padding: 0 5px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
`
export const Grid = styled.div `

`
export const Row = styled.div `
  display: flex;
  align-items: center;
`

export const Form = styled.form `

`
export const Input = styled.input `
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #0056d9;
  border-radius: 3px;
`

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps> `
  background: ${props => props.primary ? "#0056d9" : "white"};
  color: ${props => props.primary ? "white" : "#0056d9"};
  font-size: 1em;
  padding: 0.5em 1em;
  border: 2px solid #0056d9;
  border-radius: 3px;
  cursor: pointer;
  &:disabled{
    opacity: 0.4;
  }
`
const base = 40;

export const EmployeeBox = styled.div `
  display: flex;
	border-radius: 6px;
	overflow: hidden;
	margin-top: 5px;
	height: ${base * 1.5}px;
	z-index: 1;
	background-color: #ddd;
  color: #666;
`

export const EmployeeName = styled(EmployeeBox)`
  margin-right: 5px;
  padding: ${base / 2.5}px;
  justify-content: center;
  align-items: center;
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const EmployeeState = styled(EmployeeBox)`
  flex-grow:1;
`

export const Item = styled.a `
    position: relative;
		display: flex;
		flex-grow: 1;
		text-decoration: none;
		margin: auto;
		height: 100%;
		padding-left: ${base}px;
		padding-right: 0;
		cursor:pointer;
    &:first-child {
      padding-left: ${base / 2.5}px;
    }
    &:last-child {
      padding-right: ${base / 2.5}px;
      &::after{
        content: none;
      }
    }
    &::after {
      content: "";
			position: absolute;
			display: inline-block;
			width: ${base * 1.5}px;
			height: ${base * 1.5}px;
			top: 0;
			right: ${base / 1.35 * -1}px;
			background-color: #ddd;
			border-top-right-radius: 5px;
			transform: scale(0.707) rotate(45deg);
			z-index: 1;
      border: 1px solid #b1b1b1;
      border-width: 1px 1px 0 0;
    }
    &.active{
      background: #0056d9;
	    color: white;
      &::after{
        background: #0056d9;
	      color: white;
      }
    }
    &:hover{
      background: #b1b1b1;
	    color: white;
      &::after{
        background: #b1b1b1;
	      color: white;
      }
    }
`

export const Inner = styled.span`
    display: flex;
		flex-direction: column;
		margin: auto;
		z-index: 2;
`

export const ButtonAdd = styled(Button) `
  margin:1em 0.5em 0.5em 0;
`
export const InputName = styled(Input) `
  margin:1em 0.2em 0.5em 0;
`



