export default function LoginForm() {
  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='mb-4 text-2xl font-bold text-gray-700'>Login</h2>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
          Password
        </label>
        <input
          type='password'
          id='password'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
        />
      </div>
      <button
        type='submit'
        className='bg-secondary-500 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Submit
      </button>
    </form>
  )
}
