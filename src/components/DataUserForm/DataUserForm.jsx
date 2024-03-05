import css from "./DataUserForm.module.css";

export const DataUserForm = () => {
    return (
        <div className={css.allDivDUF}>
            <label className={css.labelDUForm}>
                    <span className={css.pRegDUForm}>Name</span>
                <input className={css.inputDUForm} 
                name='name'
                type="text"
                autoComplete="on"
                autoFocus
                placeholder="Please, enter your name" />
            </label>
            <label className={css.labelDUForm}>
                    <span className={css.pRegDUForm}>Email</span>
                <input className={css.inputDUForm} 
                name='email'
                type="email"
                autoComplete="off"
                placeholder="Please, enter your email" />
            </label>
            <label className={css.labelDUForm}>
                    <span className={css.pRegDUForm}>Phone</span>
                <input className={css.inputDUForm} 
                name='phone'
                type="number"
                autoComplete="off"
                placeholder="Please, enter your phone" />
            </label>
            <label className={css.labelDUForm}>
                    <span className={css.pRegDUForm}>Address</span>
                <input className={css.inputDUForm} 
                name='address'
                type="text"
                autoComplete="off"
                placeholder="Please, enter your address" />
            </label>
        </div>
    )
};