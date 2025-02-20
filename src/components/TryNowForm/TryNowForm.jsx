import s from './TryNowForm.module.css';

const TryNowForm = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Попробуйте сейчас и получите{' '}
        <span className={s.lineBreak}>5 дней бесплатного пользования</span>
      </p>
      <form className={s.form}>
        <input
          type="email"
          placeholder="ВАШ E-MAIL"
          //   value={email}
          //   onChange={onEmailChange}
          className={`${s.emailInput} buttonText`}
        />
        <button
          //   onClick={onSubmit}
          className={`${s.submitButton} buttonText`}
        >
          попробовать
        </button>
      </form>
    </div>
  );
};
export default TryNowForm;
