import React from 'react';

import { useFilter } from '../../../hooks';

import styles from './styles.module.scss';

function YearRange({ caption }) {
    return (
        <div className={styles.range}>
            <p className={styles.caption}>
                {caption}
            </p>
            <div className={styles.inputs}>
                <DataInput name="min" caption="from" />
                <DataInput name="max" caption="to" />
            </div>
        </div>
    )
}

function DataInput({ name, caption }) {
    const { setBirthYearRange, birthYear } = useFilter();
    
    return (
        <div className={styles.input}>
            <label htmlFor={name}>
                {caption}
            </label>
            <input id={name} name={name} 
                value={birthYear[name].year}
                onChange={({target}) => {
                    const era = birthYear[name].era;
                    setBirthYearRange(name, target.value, era);
                }}
            />
            <select 
                name={name}
                onChange={({target}) => {
                    const year = birthYear[name].year;
                    setBirthYearRange(name, year, target.value);
                }}
            >
                <option value="BBY">BBY</option>
                <option value="ABY">ABY</option>
            </select>
        </div>
    );
}

export { YearRange };