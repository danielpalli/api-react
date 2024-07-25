import { ChangeEvent, FormEvent, useState } from 'react';
import { countries } from '../../../../core/data/countries';
import { weatherUseCase } from '../../../../core';
import { Alert } from '../../alert/Alert';

export const Form = () => {

  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [alert, setAlert] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (Object.values(search).includes('')) {
      setAlert('All fields are required');
      return;
    }

    const data = await weatherUseCase(search);

    console.log(data);
    setAlert('');
  }


  return (
    <form className="w-full flex justify-center" onSubmit={ handleSubmit }>
      <div className='flex flex-col gap-2 rounded-md shadow-md p-4'>
      {alert && <Alert message={alert} />}

        <div className="flex flex-col gap-2">
          <label htmlFor="city" >City:</label>
          <input type="text" id="city" name="city" placeholder="City" className='border border-gray-500 rounded-md px-2' value={ search.city } onChange={ handleChange }/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" className='border border-gray-500 rounded-md px-2' value={ search.country } onChange={ handleChange }>
            <option value="country">-- Select a country --</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Search" className='w-full bg-amber-500 rounded-md shadow-md text-white uppercase font-semibold'/>
        </div>
      </div>
    </form>
  );
};
