from django.urls import path
from .views import (AuthStatusView, LoginView, LogoutView, RegisterView,
                    UserInfoView, AllUsersView)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user/view_info/', UserInfoView.as_view(), name='view_user_info'),
    path('user/is_authed/', AuthStatusView.as_view(), name='view_auth_status'),
    path('users/', AllUsersView.as_view(), name='get_users_view'),
]
