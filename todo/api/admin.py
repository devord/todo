from django.contrib import admin

from api.models import Label, Item


class LabelAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('id', 'name')


class ItemAdmin(admin.ModelAdmin):
    search_fields = ('title',)
    list_display = ('id', 'title')


admin.site.register(Label, LabelAdmin)
admin.site.register(Item, ItemAdmin)
