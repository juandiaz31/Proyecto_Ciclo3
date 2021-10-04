import React from 'react'

export function Productos() {
    return (
        <div>
            <h1>Crear productos</h1>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Identificador</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Descripcion producto</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput3">Valor unitario</label>
                    <input type="text" class="form-control" id="formGroupExampleInput3" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput4">Estado</label>
                    <select class="custom-select">
                    <option selected></option>
                    <option value="1">Disponible</option>
                    <option value="2">No disponible</option>
                    </select>
                </div>
            </form>
        </div>
    )
}


