from django.http import JsonResponse


def HealthCheckView(request):
    data = {'msg': 'Health OK'}
    return JsonResponse(data)
