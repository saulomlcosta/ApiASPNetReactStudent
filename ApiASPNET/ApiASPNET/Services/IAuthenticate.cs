using System.Threading.Tasks;

namespace ApiASPNET.Services
{
    public interface IAuthenticate
    {
        Task<bool> Authenticate(string email, string password);
        Task Logout();
    }
}
