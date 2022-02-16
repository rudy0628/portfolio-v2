import classes from './Input.module.scss';

const Input = props => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.id}>姓名</label>
			<input
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				name={props.id}
				onBlur={props.onBlur}
				onChange={props.onChange}
				value={props.value}
				required
			/>
			{props.error.length !== 0 && (
				<p className={classes['input__error']}>{props.error}</p>
			)}
		</div>
	);
};

export default Input;
