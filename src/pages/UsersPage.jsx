import { UserList } from '../components/UserList';
export const UsersPage = () => {
  return (
    <>
    <section className="flex flex-col h-full py-10">
        <h1 className="text-5xl font-semibold mb-7 w-4/5 text-left">Community members</h1>
        <p className="w-11/12 text-lg font-normal mb-7">Effectopia is a revolutionary virtual community; a real-time peer-to-peer collaboration platform for teachers and students powered by the #MASSIVEADOPTION movement. Join the community and join us in our mission to provide diversity, individuality and freedom like never before.</p>
    </section>
      <section className='w-full'>
      <p className='w-11/12 text-xl font-semibold mb-4'>Member list</p>
      <UserList/>
    </section>
    </>
  )
}