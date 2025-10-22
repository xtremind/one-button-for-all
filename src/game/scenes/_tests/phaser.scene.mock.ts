// Mock complet pour les tests de scènes Phaser
export function getPhaserSceneMock() {
  return {
    add: {
      graphics: () => {
        const graphicsMock = {
          fillStyle: () => graphicsMock,
          fillRect: () => graphicsMock,
        };
        return graphicsMock as never;
      },
      image: () => {
        const imageMock = {
          setAlpha: () => imageMock,
        };
        return imageMock as never;
      },
      text: () => {
        const textMock = {
          setOrigin: () => textMock,
        };
        return textMock as never;
      },
    },
    cameras: {
      main: {
        setBackgroundColor: () => ({} as never),
      },
    },
    input: {
      once: (_event: string, cb: () => void) => cb(),
    } as never,
    scene: {
      start: () => ({} as never),
    } as never,
  };
}
