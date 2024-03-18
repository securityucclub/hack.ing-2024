from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import CustomTokenObtainPairSerializer, CustomUserSerializer


class AllUsersView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        users = User.objects.exclude(pk=request.user.pk)
        serializer = CustomUserSerializer(users, many=True)

        return Response(serializer.data)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = (permissions.AllowAny,)


class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if 'access' in response.data and 'refresh' in response.data:
            access_token = response.data['access']
            refresh_token = response.data['refresh']

            response.set_cookie('access_token', access_token, httponly=True)
            response.set_cookie('refresh_token', refresh_token, httponly=True)

        return response


class LogoutView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        refresh_token = request.data.get('refresh')
        RefreshToken(refresh_token).blacklist()

        return Response({'detail': 'Logout successful'})


class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = CustomUserSerializer(user)

        return Response(serializer.data)


class AuthStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_authenticated = request.user.is_authenticated

        return Response({'authenticated': user_authenticated})
