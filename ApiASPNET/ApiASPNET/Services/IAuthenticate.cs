﻿using System.Threading.Tasks;

namespace ApiASPNET.Services
{
    interface IAuthenticate
    {
        Task<bool> Authenticate(string email, string password);
        Task<bool> RegisterUser(string email, string password);
        Task Logout();
    }
}
