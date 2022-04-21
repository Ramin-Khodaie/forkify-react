module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
            @import "src/assets/_variables.scss";
            @import "src/assets/_components.scss";
          `,
        },
      },
    },
  };