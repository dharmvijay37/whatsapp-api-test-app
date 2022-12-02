const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAJVRsesvF8BAAZCVLYmSPoMDvADCJyZCHOaEvJnNpZBAD9XEeODAyZBdYGFoWYRhrGGG9bIpiORq8IErMNSWy5GlHeCQG8m17HOaas2jfGl6LMS8juyrbK3cAcarANMinhVf3qZCfuLCL2mn7DlNfd7UZB3wd77BNPssJyr5ZCtN2C9EUMGHph19M1MsXdl0k6qWZBkdoZAAaAZDZD',
    Meta_WA_SenderPhoneNumberId: '104583492496053',
    Meta_WA_wabaId: '102226029402007',
    Meta_WA_VerifyToken: '123',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};