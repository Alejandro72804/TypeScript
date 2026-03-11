// usuario.test.ts
import { Usuario } from './usuario';

describe('Usuario', () => {
    let usuario: Usuario;

    beforeEach(() => {
        usuario = new Usuario('Juan', 'Pérez');
    });

    test('debe regresar el nombre correcto', () => {
        expect(usuario.getName()).toBe('Juan');
    });

    test('debe regresar el perfil correcto', () => {
        expect(usuario.getProfile()).toBe('Juan Pérez');
    });

    test('debe verificar que el usuario está activo', () => {
        expect(usuario.isStillActive()).toBeTruthy();
    });

    test('debe verificar que el usuario está inactivo', () => {
        const usuarioInactivo = new Usuario('Ana', 'García', false);
        expect(usuarioInactivo.isStillActive()).toBeFalsy();
    });
});