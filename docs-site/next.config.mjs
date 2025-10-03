import nextra from 'nextra';

const withNextra = nextra({
theme: 'nextra-theme-docs',
themeConfig: './theme.config.ts', // using TS config file is fine
mdxOptions: {},
});

const nextConfig = {
reactStrictMode: true,
// DO NOT enable appDir here; we are on Pages Router.
};

export default withNextra(nextConfig);
