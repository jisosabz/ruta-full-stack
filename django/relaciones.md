# Relaciones en Django (Modelos)

## 🔗 Tipos de Relaciones

### 1. Uno a Uno (`OneToOneField`)

**Un objeto A tiene exactamente un objeto B relacionado y viceversa.**

- Ideal para extender modelos o dividir datos en tablas separadas.
- Similar a una clave primaria/clave externa única en SQL.

```python
from django.db import models

class Perfil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    biografia = models.TextField()
```

---

### 2. Uno a Muchos (`ForeignKey`)

**Un objeto A puede estar relacionado con muchos objetos B, pero cada objeto B solo apunta a un A.**

- Relación más común en bases de datos.
- Se representa con una clave foránea.

```python
class Reportero(models.Model):
    nombre = models.CharField(max_length=100)

class Articulo(models.Model):
    reportero = models.ForeignKey(Reportero, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
```

---

### 3. Muchos a Muchos (`ManyToManyField`)

**Un objeto A puede estar relacionado con muchos objetos B y viceversa.**

- Django crea automáticamente una tabla intermedia.
- Muy útil para relaciones como estudiantes ↔ materias.

```python
class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    cursos = models.ManyToManyField('Curso')

class Curso(models.Model):
    titulo = models.CharField(max_length=200)
```

---

## 🧠 Notas Clave

- `on_delete=models.CASCADE`: borra los objetos relacionados si se elimina el principal.
- `related_name`: permite definir el nombre del acceso inverso (`reportero.articulo_set.all()`).
- Usá `select_related` y `prefetch_related` para consultas eficientes.

---

> ✅ Este resumen te ayuda a entender las relaciones fundamentales en modelos de Django. Ideal para cuando estás construyendo sistemas con múltiples entidades relacionadas.
